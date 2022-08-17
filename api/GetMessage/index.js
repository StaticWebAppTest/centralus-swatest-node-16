module.exports = async function (context, req) {
  const date = "2022-08-17T06:14:57.045Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

