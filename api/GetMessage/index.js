module.exports = async function (context, req) {
  const date = "2025-05-04T09:12:28.319Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

