module.exports = async function (context, req) {
  const date = "2024-08-24T06:14:17.532Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

