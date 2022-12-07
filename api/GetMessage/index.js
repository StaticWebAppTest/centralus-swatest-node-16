module.exports = async function (context, req) {
  const date = "2022-12-07T17:09:05.525Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

