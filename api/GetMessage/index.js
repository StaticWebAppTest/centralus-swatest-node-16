module.exports = async function (context, req) {
  const date = "2022-08-29T15:12:13.609Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

