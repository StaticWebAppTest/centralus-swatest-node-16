module.exports = async function (context, req) {
  const date = "2025-04-03T15:12:21.400Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

