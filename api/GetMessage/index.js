module.exports = async function (context, req) {
  const date = "2022-08-04T14:09:12.030Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

