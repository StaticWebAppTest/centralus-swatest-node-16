module.exports = async function (context, req) {
  const date = "2024-08-04T06:13:42.523Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

