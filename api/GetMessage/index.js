module.exports = async function (context, req) {
  const date = "2022-08-28T12:18:49.317Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

