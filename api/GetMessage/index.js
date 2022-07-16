module.exports = async function (context, req) {
  const date = "2022-07-16T07:09:44.261Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

