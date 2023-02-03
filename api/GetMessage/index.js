module.exports = async function (context, req) {
  const date = "2023-02-03T22:09:09.527Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

