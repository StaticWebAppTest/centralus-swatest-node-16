module.exports = async function (context, req) {
  const date = "2024-08-13T06:15:45.902Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

