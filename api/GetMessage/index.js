module.exports = async function (context, req) {
  const date = "2022-03-22T21:08:50.037Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

