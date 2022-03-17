module.exports = async function (context, req) {
  const date = "2022-03-17T10:11:04.538Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

