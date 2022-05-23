module.exports = async function (context, req) {
  const date = "2022-05-23T07:13:14.630Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

