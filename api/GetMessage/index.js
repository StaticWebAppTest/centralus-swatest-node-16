module.exports = async function (context, req) {
  const date = "2023-06-30T07:09:15.103Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

