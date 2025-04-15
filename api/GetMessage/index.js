module.exports = async function (context, req) {
  const date = "2025-04-15T04:15:30.867Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

