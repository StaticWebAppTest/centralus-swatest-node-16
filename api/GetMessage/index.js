module.exports = async function (context, req) {
  const date = "2023-10-04T02:17:42.875Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

