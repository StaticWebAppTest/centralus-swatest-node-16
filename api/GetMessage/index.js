module.exports = async function (context, req) {
  const date = "2023-02-07T21:08:43.162Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

