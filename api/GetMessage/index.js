module.exports = async function (context, req) {
  const date = "2022-09-19T16:16:42.034Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

