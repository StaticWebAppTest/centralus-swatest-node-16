module.exports = async function (context, req) {
  const date = "2024-08-15T17:09:22.821Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

