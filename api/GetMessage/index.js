module.exports = async function (context, req) {
  const date = "2024-04-12T14:08:47.562Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

