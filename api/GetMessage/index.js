module.exports = async function (context, req) {
  const date = "2022-03-10T22:10:26.433Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

