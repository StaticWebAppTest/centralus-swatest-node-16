module.exports = async function (context, req) {
  const date = "2022-05-18T19:09:16.760Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

