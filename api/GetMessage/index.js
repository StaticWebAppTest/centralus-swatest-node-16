module.exports = async function (context, req) {
  const date = "2024-12-12T03:33:52.924Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

