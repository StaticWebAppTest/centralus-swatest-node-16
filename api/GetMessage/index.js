module.exports = async function (context, req) {
  const date = "2022-09-18T12:21:14.118Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

