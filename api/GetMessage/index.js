module.exports = async function (context, req) {
  const date = "2024-11-30T03:23:08.527Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

