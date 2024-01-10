module.exports = async function (context, req) {
  const date = "2024-01-10T10:09:53.707Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

