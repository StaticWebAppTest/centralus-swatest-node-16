module.exports = async function (context, req) {
  const date = "2022-05-30T07:13:20.186Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

