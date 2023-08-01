module.exports = async function (context, req) {
  const date = "2023-08-01T16:10:50.490Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

