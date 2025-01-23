module.exports = async function (context, req) {
  const date = "2025-01-23T22:10:31.277Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

