module.exports = async function (context, req) {
  const date = "2023-07-29T12:15:23.336Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

