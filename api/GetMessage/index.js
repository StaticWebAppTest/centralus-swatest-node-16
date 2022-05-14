module.exports = async function (context, req) {
  const date = "2022-05-14T21:09:40.858Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

