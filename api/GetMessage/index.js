module.exports = async function (context, req) {
  const date = "2023-08-07T06:12:11.490Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

