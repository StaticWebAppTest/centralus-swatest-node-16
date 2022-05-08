module.exports = async function (context, req) {
  const date = "2022-05-08T06:13:58.426Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

