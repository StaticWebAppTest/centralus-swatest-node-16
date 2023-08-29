module.exports = async function (context, req) {
  const date = "2023-08-29T12:16:16.520Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

