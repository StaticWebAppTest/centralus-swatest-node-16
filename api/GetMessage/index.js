module.exports = async function (context, req) {
  const date = "2024-03-05T19:07:01.065Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

