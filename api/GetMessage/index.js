module.exports = async function (context, req) {
  const date = "2024-08-25T06:14:17.645Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

