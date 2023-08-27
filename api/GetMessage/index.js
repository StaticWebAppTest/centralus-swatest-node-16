module.exports = async function (context, req) {
  const date = "2023-08-27T16:09:31.008Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

