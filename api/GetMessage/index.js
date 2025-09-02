module.exports = async function (context, req) {
  const date = "2025-09-02T09:14:24.628Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

