module.exports = async function (context, req) {
  const date = "2025-06-08T12:24:10.944Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

