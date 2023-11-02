module.exports = async function (context, req) {
  const date = "2023-11-02T19:07:00.548Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

