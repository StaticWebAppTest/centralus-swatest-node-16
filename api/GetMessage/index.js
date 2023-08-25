module.exports = async function (context, req) {
  const date = "2023-08-25T02:14:56.143Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

