module.exports = async function (context, req) {
  const date = "2022-03-26T12:15:43.104Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

