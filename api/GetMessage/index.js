module.exports = async function (context, req) {
  const date = "2025-02-04T09:12:15.288Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

