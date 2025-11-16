module.exports = async function (context, req) {
  const date = "2025-11-16T15:11:40.272Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

