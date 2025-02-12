module.exports = async function (context, req) {
  const date = "2025-02-12T17:11:02.349Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

