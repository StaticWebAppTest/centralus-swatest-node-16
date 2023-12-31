module.exports = async function (context, req) {
  const date = "2023-12-31T21:07:32.491Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

