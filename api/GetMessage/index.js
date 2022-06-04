module.exports = async function (context, req) {
  const date = "2022-06-04T03:34:37.609Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

