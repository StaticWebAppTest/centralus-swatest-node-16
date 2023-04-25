module.exports = async function (context, req) {
  const date = "2023-04-25T02:01:43.162Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

