module.exports = async function (context, req) {
  const date = "2022-11-22T18:13:35.538Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

