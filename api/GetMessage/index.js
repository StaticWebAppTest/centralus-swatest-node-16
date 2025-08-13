module.exports = async function (context, req) {
  const date = "2025-08-13T13:30:28.744Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

