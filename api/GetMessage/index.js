module.exports = async function (context, req) {
  const date = "2023-01-23T22:08:53.260Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

