module.exports = async function (context, req) {
  const date = "2024-05-29T12:18:17.217Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

