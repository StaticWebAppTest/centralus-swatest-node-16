module.exports = async function (context, req) {
  const date = "2023-12-09T22:07:58.602Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

