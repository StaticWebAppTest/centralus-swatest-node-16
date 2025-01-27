module.exports = async function (context, req) {
  const date = "2025-01-27T13:18:11.748Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

