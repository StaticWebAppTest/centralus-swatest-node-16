module.exports = async function (context, req) {
  const date = "2022-06-06T10:13:14.779Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

