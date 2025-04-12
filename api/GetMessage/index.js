module.exports = async function (context, req) {
  const date = "2025-04-12T11:09:32.727Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

