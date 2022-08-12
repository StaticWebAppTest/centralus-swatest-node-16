module.exports = async function (context, req) {
  const date = "2022-08-12T07:10:03.885Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

