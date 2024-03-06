module.exports = async function (context, req) {
  const date = "2024-03-06T18:11:51.417Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

