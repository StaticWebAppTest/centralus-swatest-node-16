module.exports = async function (context, req) {
  const date = "2025-05-12T21:12:13.086Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

