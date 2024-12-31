module.exports = async function (context, req) {
  const date = "2024-12-31T19:08:45.862Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

