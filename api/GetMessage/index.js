module.exports = async function (context, req) {
  const date = "2023-08-19T02:10:22.606Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

