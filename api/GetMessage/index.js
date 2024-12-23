module.exports = async function (context, req) {
  const date = "2024-12-23T03:18:20.736Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

