module.exports = async function (context, req) {
  const date = "2024-09-12T03:12:29.657Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

