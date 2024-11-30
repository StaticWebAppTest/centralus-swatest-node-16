module.exports = async function (context, req) {
  const date = "2024-11-30T02:21:30.536Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

