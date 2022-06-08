module.exports = async function (context, req) {
  const date = "2022-06-08T10:11:31.426Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

