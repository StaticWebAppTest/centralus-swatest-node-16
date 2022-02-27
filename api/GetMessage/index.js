module.exports = async function (context, req) {
  const date = "2022-02-27T23:09:37.926Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

