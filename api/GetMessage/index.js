module.exports = async function (context, req) {
  const date = "2025-06-06T09:14:28.411Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

