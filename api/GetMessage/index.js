module.exports = async function (context, req) {
  const date = "2025-04-12T23:11:45.978Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

