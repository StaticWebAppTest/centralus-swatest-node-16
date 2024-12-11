module.exports = async function (context, req) {
  const date = "2024-12-11T08:17:03.491Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

