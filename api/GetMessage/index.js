module.exports = async function (context, req) {
  const date = "2023-08-06T03:08:49.520Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

