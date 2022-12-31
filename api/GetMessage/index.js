module.exports = async function (context, req) {
  const date = "2022-12-31T17:07:30.527Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

