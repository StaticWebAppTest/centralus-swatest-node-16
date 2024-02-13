module.exports = async function (context, req) {
  const date = "2024-02-13T20:10:42.721Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

