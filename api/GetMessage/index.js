module.exports = async function (context, req) {
  const date = "2023-09-08T02:15:11.008Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

