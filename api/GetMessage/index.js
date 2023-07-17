module.exports = async function (context, req) {
  const date = "2023-07-17T06:14:00.226Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

