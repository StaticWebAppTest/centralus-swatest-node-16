module.exports = async function (context, req) {
  const date = "2024-03-01T06:12:29.418Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

