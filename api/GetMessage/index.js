module.exports = async function (context, req) {
  const date = "2023-07-31T10:09:51.732Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

