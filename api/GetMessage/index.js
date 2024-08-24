module.exports = async function (context, req) {
  const date = "2024-08-24T21:09:13.104Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

