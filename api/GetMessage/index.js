module.exports = async function (context, req) {
  const date = "2024-12-10T18:17:48.721Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

