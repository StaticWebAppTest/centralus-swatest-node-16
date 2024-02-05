module.exports = async function (context, req) {
  const date = "2024-02-05T18:11:26.906Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

