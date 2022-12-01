module.exports = async function (context, req) {
  const date = "2022-12-01T04:12:43.973Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

