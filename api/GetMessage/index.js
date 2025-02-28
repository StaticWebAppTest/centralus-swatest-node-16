module.exports = async function (context, req) {
  const date = "2025-02-28T02:20:22.031Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

