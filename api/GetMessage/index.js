module.exports = async function (context, req) {
  const date = "2023-01-25T06:12:14.773Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

