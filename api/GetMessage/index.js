module.exports = async function (context, req) {
  const date = "2023-01-07T21:07:50.491Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

