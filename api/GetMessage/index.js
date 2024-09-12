module.exports = async function (context, req) {
  const date = "2024-09-12T18:15:58.299Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

