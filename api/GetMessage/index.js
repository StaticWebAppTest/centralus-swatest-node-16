module.exports = async function (context, req) {
  const date = "2024-05-29T21:08:57.105Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

