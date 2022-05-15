module.exports = async function (context, req) {
  const date = "2022-05-15T22:10:19.357Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

