module.exports = async function (context, req) {
  const date = "2022-06-30T07:08:20.693Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

