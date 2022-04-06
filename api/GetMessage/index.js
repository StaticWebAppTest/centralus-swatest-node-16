module.exports = async function (context, req) {
  const date = "2022-04-06T06:12:24.118Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

