module.exports = async function (context, req) {
  const date = "2025-05-03T09:12:31.621Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

