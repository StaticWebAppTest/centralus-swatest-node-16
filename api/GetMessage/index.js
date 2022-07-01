module.exports = async function (context, req) {
  const date = "2022-07-01T10:11:50.462Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

