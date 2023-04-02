module.exports = async function (context, req) {
  const date = "2023-04-02T06:11:00.527Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

