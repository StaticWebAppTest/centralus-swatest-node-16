module.exports = async function (context, req) {
  const date = "2022-06-07T02:51:36.111Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

