module.exports = async function (context, req) {
  const date = "2023-05-04T22:08:23.875Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

