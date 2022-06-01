module.exports = async function (context, req) {
  const date = "2022-06-01T16:16:30.490Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

