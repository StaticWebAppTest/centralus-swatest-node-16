module.exports = async function (context, req) {
  const date = "2024-08-12T19:09:26.862Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

