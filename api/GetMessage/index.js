module.exports = async function (context, req) {
  const date = "2023-03-25T19:06:47.527Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

