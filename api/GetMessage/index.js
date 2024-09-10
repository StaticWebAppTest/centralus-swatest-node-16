module.exports = async function (context, req) {
  const date = "2024-09-10T16:13:15.527Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

