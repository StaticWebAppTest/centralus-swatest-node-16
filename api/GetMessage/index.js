module.exports = async function (context, req) {
  const date = "2022-06-15T12:19:48.527Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

