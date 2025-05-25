module.exports = async function (context, req) {
  const date = "2025-05-25T13:20:53.526Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

