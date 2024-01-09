module.exports = async function (context, req) {
  const date = "2024-01-09T21:08:13.491Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

