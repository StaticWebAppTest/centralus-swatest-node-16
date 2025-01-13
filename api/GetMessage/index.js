module.exports = async function (context, req) {
  const date = "2025-01-13T05:12:28.859Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

