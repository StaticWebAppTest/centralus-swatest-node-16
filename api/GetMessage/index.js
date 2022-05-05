module.exports = async function (context, req) {
  const date = "2022-05-05T12:25:59.853Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

