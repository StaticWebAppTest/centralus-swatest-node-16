module.exports = async function (context, req) {
  const date = "2024-08-03T15:09:31.490Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

