module.exports = async function (context, req) {
  const date = "2023-07-20T03:09:29.105Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

