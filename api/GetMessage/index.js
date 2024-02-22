module.exports = async function (context, req) {
  const date = "2024-02-22T15:08:50.105Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

