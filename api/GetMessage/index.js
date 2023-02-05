module.exports = async function (context, req) {
  const date = "2023-02-05T21:07:50.404Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

