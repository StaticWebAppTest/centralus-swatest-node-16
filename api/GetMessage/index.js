module.exports = async function (context, req) {
  const date = "2023-08-22T09:08:39.778Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

