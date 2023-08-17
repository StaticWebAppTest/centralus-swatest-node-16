module.exports = async function (context, req) {
  const date = "2023-08-17T04:10:01.639Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

