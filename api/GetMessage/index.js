module.exports = async function (context, req) {
  const date = "2025-04-23T13:24:20.737Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

