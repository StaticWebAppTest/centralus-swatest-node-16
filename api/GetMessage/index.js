module.exports = async function (context, req) {
  const date = "2022-03-08T03:10:12.250Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

