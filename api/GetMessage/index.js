module.exports = async function (context, req) {
  const date = "2025-04-10T19:10:22.867Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

