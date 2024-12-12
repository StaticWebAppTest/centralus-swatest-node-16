module.exports = async function (context, req) {
  const date = "2024-12-12T17:11:11.527Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

