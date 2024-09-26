module.exports = async function (context, req) {
  const date = "2024-09-26T14:10:22.958Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

