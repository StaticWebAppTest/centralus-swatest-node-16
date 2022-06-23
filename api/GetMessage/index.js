module.exports = async function (context, req) {
  const date = "2022-06-23T12:22:24.527Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

