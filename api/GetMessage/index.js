module.exports = async function (context, req) {
  const date = "2023-04-27T20:09:13.082Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

