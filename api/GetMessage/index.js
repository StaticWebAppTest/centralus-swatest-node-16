module.exports = async function (context, req) {
  const date = "2023-04-05T13:21:24.032Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

