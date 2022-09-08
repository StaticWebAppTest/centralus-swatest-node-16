module.exports = async function (context, req) {
  const date = "2022-09-08T10:13:19.969Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

