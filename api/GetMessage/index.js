module.exports = async function (context, req) {
  const date = "2022-05-22T12:18:27.010Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

