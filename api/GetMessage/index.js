module.exports = async function (context, req) {
  const date = "2022-08-17T12:24:05.010Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

