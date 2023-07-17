module.exports = async function (context, req) {
  const date = "2023-07-17T12:20:58.118Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

