module.exports = async function (context, req) {
  const date = "2022-10-12T23:14:17.114Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

