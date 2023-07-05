module.exports = async function (context, req) {
  const date = "2023-07-05T03:23:26.973Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

