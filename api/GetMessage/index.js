module.exports = async function (context, req) {
  const date = "2022-12-11T03:15:47.357Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

