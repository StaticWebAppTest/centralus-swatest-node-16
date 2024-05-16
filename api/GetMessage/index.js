module.exports = async function (context, req) {
  const date = "2024-05-16T12:18:12.307Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

