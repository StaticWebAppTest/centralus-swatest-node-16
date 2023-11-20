module.exports = async function (context, req) {
  const date = "2023-11-20T02:23:53.527Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

