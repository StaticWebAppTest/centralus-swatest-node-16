module.exports = async function (context, req) {
  const date = "2024-11-06T16:15:43.491Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

