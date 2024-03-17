module.exports = async function (context, req) {
  const date = "2024-03-17T02:16:46.999Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

