module.exports = async function (context, req) {
  const date = "2023-04-13T20:09:28.091Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

