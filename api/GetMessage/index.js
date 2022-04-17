module.exports = async function (context, req) {
  const date = "2022-04-17T09:10:29.330Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

