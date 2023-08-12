module.exports = async function (context, req) {
  const date = "2023-08-12T19:06:01.562Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

