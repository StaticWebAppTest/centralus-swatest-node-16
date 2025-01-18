module.exports = async function (context, req) {
  const date = "2025-01-18T04:13:27.941Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

