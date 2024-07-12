module.exports = async function (context, req) {
  const date = "2024-07-12T20:10:58.105Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

