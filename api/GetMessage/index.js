module.exports = async function (context, req) {
  const date = "2023-08-04T22:07:47.195Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

