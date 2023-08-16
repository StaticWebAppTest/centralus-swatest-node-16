module.exports = async function (context, req) {
  const date = "2023-08-16T04:10:19.164Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

