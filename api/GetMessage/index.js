module.exports = async function (context, req) {
  const date = "2022-08-09T05:19:31.095Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

