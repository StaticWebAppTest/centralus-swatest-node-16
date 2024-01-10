module.exports = async function (context, req) {
  const date = "2024-01-10T14:09:00.050Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

