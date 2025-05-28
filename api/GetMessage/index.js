module.exports = async function (context, req) {
  const date = "2025-05-28T10:15:12.491Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

