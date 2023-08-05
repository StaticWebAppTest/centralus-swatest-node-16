module.exports = async function (context, req) {
  const date = "2023-08-05T12:14:42.036Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

