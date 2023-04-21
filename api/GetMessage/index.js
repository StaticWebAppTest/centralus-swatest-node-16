module.exports = async function (context, req) {
  const date = "2023-04-21T19:07:01.857Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

