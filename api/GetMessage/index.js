module.exports = async function (context, req) {
  const date = "2023-11-30T13:12:24.527Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

