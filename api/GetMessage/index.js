module.exports = async function (context, req) {
  const date = "2022-06-22T06:13:18.441Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

