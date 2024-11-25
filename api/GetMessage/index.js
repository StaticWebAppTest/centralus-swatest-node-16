module.exports = async function (context, req) {
  const date = "2024-11-25T11:10:36.244Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

