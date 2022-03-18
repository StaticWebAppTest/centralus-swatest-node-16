module.exports = async function (context, req) {
  const date = "2022-03-18T00:42:28.597Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

