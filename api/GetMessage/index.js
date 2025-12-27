module.exports = async function (context, req) {
  const date = "2025-12-27T13:24:05.564Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

