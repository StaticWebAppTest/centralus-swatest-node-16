module.exports = async function (context, req) {
  const date = "2022-12-15T06:12:55.527Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

