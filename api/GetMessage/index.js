module.exports = async function (context, req) {
  const date = "2023-06-25T20:10:17.105Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

