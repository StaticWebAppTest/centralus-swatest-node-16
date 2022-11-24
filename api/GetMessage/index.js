module.exports = async function (context, req) {
  const date = "2022-11-24T00:59:40.357Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

