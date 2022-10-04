module.exports = async function (context, req) {
  const date = "2022-10-04T10:13:40.910Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

