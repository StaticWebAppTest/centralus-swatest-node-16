module.exports = async function (context, req) {
  const date = "2024-02-11T18:10:58.383Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

