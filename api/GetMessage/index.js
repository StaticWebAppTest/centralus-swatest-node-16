module.exports = async function (context, req) {
  const date = "2025-08-25T21:12:23.693Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

