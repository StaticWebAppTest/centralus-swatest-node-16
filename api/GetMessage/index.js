module.exports = async function (context, req) {
  const date = "2024-12-19T23:11:28.413Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

