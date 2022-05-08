module.exports = async function (context, req) {
  const date = "2022-05-08T07:10:29.081Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

