module.exports = async function (context, req) {
  const date = "2025-05-09T09:13:56.648Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

