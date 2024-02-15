module.exports = async function (context, req) {
  const date = "2024-02-15T06:12:06.062Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

