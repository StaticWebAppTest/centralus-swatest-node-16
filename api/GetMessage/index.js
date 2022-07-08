module.exports = async function (context, req) {
  const date = "2022-07-08T19:09:09.782Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

