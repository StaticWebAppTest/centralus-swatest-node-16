module.exports = async function (context, req) {
  const date = "2024-06-01T18:12:28.029Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

