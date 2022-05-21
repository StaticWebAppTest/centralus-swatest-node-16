module.exports = async function (context, req) {
  const date = "2022-05-21T15:11:19.643Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

