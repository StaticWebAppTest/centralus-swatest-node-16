module.exports = async function (context, req) {
  const date = "2023-06-06T10:09:14.284Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

