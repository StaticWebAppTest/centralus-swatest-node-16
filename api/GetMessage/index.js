module.exports = async function (context, req) {
  const date = "2022-02-27T12:17:07.527Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

