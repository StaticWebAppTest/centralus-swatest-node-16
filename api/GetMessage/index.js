module.exports = async function (context, req) {
  const date = "2022-03-20T22:09:49.697Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

