module.exports = async function (context, req) {
  const date = "2024-12-13T23:12:00.546Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

