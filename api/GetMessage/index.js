module.exports = async function (context, req) {
  const date = "2023-12-31T10:08:54.744Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

