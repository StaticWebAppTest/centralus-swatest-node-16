module.exports = async function (context, req) {
  const date = "2022-03-08T07:10:23.611Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

