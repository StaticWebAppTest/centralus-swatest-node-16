module.exports = async function (context, req) {
  const date = "2023-01-04T00:50:05.973Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

