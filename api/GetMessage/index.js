module.exports = async function (context, req) {
  const date = "2024-11-25T21:11:33.307Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

