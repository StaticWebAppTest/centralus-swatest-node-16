module.exports = async function (context, req) {
  const date = "2023-12-26T09:08:59.105Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

