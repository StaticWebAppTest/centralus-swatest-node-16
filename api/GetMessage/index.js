module.exports = async function (context, req) {
  const date = "2024-01-13T12:15:44.442Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

