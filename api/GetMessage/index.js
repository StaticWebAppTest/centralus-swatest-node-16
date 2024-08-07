module.exports = async function (context, req) {
  const date = "2024-08-07T21:11:52.105Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

