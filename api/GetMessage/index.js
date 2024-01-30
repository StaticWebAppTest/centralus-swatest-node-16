module.exports = async function (context, req) {
  const date = "2024-01-30T18:11:26.413Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

