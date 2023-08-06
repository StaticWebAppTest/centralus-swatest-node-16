module.exports = async function (context, req) {
  const date = "2023-08-06T10:08:22.284Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

