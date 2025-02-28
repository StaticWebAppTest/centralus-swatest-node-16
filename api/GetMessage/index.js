module.exports = async function (context, req) {
  const date = "2025-02-28T17:10:50.765Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

