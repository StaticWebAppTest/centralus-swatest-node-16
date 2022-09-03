module.exports = async function (context, req) {
  const date = "2022-09-03T12:18:42.961Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

