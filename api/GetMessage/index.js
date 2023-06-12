module.exports = async function (context, req) {
  const date = "2023-06-12T23:08:39.054Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

