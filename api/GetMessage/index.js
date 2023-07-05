module.exports = async function (context, req) {
  const date = "2023-07-05T13:22:19.389Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

