module.exports = async function (context, req) {
  const date = "2025-03-18T09:14:02.480Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

