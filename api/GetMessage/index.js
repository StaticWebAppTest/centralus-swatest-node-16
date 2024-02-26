module.exports = async function (context, req) {
  const date = "2024-02-26T16:11:28.685Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

