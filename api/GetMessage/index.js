module.exports = async function (context, req) {
  const date = "2022-08-10T02:59:55.400Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

