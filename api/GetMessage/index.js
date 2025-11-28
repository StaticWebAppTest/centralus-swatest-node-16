module.exports = async function (context, req) {
  const date = "2025-11-28T10:15:36.002Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

