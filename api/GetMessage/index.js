module.exports = async function (context, req) {
  const date = "2022-07-14T23:12:26.240Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

