module.exports = async function (context, req) {
  const date = "2023-10-04T19:07:29.490Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

