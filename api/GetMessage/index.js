module.exports = async function (context, req) {
  const date = "2025-03-06T18:16:46.121Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

