module.exports = async function (context, req) {
  const date = "2025-05-28T07:13:20.821Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

