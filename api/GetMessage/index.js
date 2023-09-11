module.exports = async function (context, req) {
  const date = "2023-09-11T00:40:17.431Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

