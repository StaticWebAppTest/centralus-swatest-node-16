module.exports = async function (context, req) {
  const date = "2022-10-09T07:15:58.523Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

