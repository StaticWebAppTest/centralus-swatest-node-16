module.exports = async function (context, req) {
  const date = "2025-04-08T09:14:07.391Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

