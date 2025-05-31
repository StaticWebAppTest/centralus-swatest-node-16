module.exports = async function (context, req) {
  const date = "2025-05-31T13:22:44.859Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

