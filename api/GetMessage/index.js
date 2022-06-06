module.exports = async function (context, req) {
  const date = "2022-06-06T02:53:57.895Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

