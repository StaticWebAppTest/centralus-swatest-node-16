module.exports = async function (context, req) {
  const date = "2022-03-03T00:42:35.021Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

