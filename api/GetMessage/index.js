module.exports = async function (context, req) {
  const date = "2024-06-12T18:13:49.464Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

