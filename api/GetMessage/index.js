module.exports = async function (context, req) {
  const date = "2024-07-04T06:14:43.514Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

