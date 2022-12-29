module.exports = async function (context, req) {
  const date = "2022-12-29T02:09:05.645Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

