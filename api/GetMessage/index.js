module.exports = async function (context, req) {
  const date = "2024-05-12T11:08:22.316Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

