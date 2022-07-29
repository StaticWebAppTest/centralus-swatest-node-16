module.exports = async function (context, req) {
  const date = "2022-07-29T06:14:34.973Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

