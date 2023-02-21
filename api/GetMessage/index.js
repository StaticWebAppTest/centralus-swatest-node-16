module.exports = async function (context, req) {
  const date = "2023-02-21T12:18:57.744Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

