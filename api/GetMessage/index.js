module.exports = async function (context, req) {
  const date = "2022-08-21T15:10:25.114Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

