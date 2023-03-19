module.exports = async function (context, req) {
  const date = "2023-03-19T20:09:51.041Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

