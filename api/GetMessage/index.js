module.exports = async function (context, req) {
  const date = "2022-02-24T22:10:12.239Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

