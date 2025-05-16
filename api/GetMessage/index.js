module.exports = async function (context, req) {
  const date = "2025-05-16T18:18:04.400Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

