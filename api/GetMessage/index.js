module.exports = async function (context, req) {
  const date = "2024-06-17T23:09:57.003Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

