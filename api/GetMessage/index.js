module.exports = async function (context, req) {
  const date = "2024-06-30T16:12:22.028Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

