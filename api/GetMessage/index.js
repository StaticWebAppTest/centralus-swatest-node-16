module.exports = async function (context, req) {
  const date = "2024-05-30T02:26:16.322Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

