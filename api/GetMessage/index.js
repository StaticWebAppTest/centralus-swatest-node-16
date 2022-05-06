module.exports = async function (context, req) {
  const date = "2022-05-06T23:11:03.116Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

