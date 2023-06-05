module.exports = async function (context, req) {
  const date = "2023-06-05T23:08:53.105Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

