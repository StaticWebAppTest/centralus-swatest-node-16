module.exports = async function (context, req) {
  const date = "2022-03-01T22:09:46.051Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

