module.exports = async function (context, req) {
  const date = "2022-08-06T10:11:02.373Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

