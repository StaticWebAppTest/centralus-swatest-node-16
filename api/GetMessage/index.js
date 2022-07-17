module.exports = async function (context, req) {
  const date = "2022-07-17T21:09:31.434Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

