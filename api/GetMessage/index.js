module.exports = async function (context, req) {
  const date = "2022-03-12T04:13:15.043Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

