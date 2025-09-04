module.exports = async function (context, req) {
  const date = "2025-09-04T09:13:24.021Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

