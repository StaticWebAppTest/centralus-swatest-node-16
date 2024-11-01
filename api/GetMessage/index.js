module.exports = async function (context, req) {
  const date = "2024-11-01T10:13:19.744Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

