module.exports = async function (context, req) {
  const date = "2025-12-28T11:12:16.480Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

