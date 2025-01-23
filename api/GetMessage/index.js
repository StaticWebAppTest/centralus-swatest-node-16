module.exports = async function (context, req) {
  const date = "2025-01-23T13:18:13.775Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

