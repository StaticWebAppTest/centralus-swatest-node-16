module.exports = async function (context, req) {
  const date = "2025-01-28T08:15:36.827Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

