module.exports = async function (context, req) {
  const date = "2024-01-05T13:11:28.209Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

