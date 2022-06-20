module.exports = async function (context, req) {
  const date = "2022-06-20T02:54:15.253Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

