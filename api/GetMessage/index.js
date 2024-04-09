module.exports = async function (context, req) {
  const date = "2024-04-09T10:11:35.188Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

