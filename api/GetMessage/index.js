module.exports = async function (context, req) {
  const date = "2022-08-08T23:11:29.461Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

