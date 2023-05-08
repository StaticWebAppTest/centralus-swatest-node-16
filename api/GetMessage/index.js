module.exports = async function (context, req) {
  const date = "2023-05-08T10:09:31.823Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

