module.exports = async function (context, req) {
  const date = "2023-12-23T02:17:12.145Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

