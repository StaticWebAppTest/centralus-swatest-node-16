module.exports = async function (context, req) {
  const date = "2023-03-04T04:12:17.042Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

