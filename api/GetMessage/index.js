module.exports = async function (context, req) {
  const date = "2024-11-04T09:14:12.798Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

