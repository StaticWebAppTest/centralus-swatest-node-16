module.exports = async function (context, req) {
  const date = "2022-06-23T10:11:48.961Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

