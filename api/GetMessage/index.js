module.exports = async function (context, req) {
  const date = "2024-12-16T09:14:28.286Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

