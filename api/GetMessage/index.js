module.exports = async function (context, req) {
  const date = "2023-01-29T23:09:40.737Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

