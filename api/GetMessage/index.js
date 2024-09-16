module.exports = async function (context, req) {
  const date = "2024-09-16T20:11:52.491Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

