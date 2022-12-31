module.exports = async function (context, req) {
  const date = "2022-12-31T07:07:48.862Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

