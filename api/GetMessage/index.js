module.exports = async function (context, req) {
  const date = "2023-11-23T22:08:12.046Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

