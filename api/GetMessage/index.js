module.exports = async function (context, req) {
  const date = "2022-03-26T06:12:13.994Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

