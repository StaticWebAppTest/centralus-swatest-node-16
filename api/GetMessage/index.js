module.exports = async function (context, req) {
  const date = "2022-12-30T02:09:19.261Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

