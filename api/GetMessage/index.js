module.exports = async function (context, req) {
  const date = "2024-06-01T09:12:00.744Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

