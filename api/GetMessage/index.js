module.exports = async function (context, req) {
  const date = "2025-09-24T21:11:05.121Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

