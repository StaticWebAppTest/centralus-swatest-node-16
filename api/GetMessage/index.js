module.exports = async function (context, req) {
  const date = "2023-04-05T22:08:07.345Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

