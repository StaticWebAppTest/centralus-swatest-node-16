module.exports = async function (context, req) {
  const date = "2022-12-06T05:09:39.357Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

