module.exports = async function (context, req) {
  const date = "2023-08-08T14:08:14.077Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

