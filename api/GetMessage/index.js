module.exports = async function (context, req) {
  const date = "2023-05-17T04:10:36.857Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

