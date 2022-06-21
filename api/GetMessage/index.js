module.exports = async function (context, req) {
  const date = "2022-06-21T06:13:14.272Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

