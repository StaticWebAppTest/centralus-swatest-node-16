module.exports = async function (context, req) {
  const date = "2024-02-01T21:08:00.491Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

