module.exports = async function (context, req) {
  const date = "2022-09-07T23:13:24.626Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

