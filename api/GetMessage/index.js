module.exports = async function (context, req) {
  const date = "2025-03-21T09:13:19.036Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

