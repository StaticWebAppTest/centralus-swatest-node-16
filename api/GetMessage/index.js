module.exports = async function (context, req) {
  const date = "2022-06-18T19:08:28.775Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

