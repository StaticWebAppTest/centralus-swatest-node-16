module.exports = async function (context, req) {
  const date = "2024-04-15T03:18:40.769Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

