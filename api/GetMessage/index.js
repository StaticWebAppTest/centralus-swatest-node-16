module.exports = async function (context, req) {
  const date = "2025-04-06T15:11:16.394Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

