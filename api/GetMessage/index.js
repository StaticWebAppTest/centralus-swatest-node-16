module.exports = async function (context, req) {
  const date = "2024-02-02T03:10:07.233Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

