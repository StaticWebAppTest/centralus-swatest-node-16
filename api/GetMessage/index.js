module.exports = async function (context, req) {
  const date = "2023-12-23T22:07:50.159Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

