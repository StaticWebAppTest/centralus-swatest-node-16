module.exports = async function (context, req) {
  const date = "2024-09-12T21:10:16.107Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

