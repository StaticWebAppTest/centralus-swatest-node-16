module.exports = async function (context, req) {
  const date = "2023-09-08T23:08:08.004Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

