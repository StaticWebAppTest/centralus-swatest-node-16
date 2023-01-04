module.exports = async function (context, req) {
  const date = "2023-01-04T08:12:31.609Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

