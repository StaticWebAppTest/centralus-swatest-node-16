module.exports = async function (context, req) {
  const date = "2024-04-20T03:10:51.146Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

