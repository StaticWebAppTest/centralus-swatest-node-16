module.exports = async function (context, req) {
  const date = "2022-08-04T06:15:14.302Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

