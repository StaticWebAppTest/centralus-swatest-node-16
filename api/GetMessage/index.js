module.exports = async function (context, req) {
  const date = "2025-04-27T09:12:32.781Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

