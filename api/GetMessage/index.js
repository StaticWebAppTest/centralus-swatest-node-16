module.exports = async function (context, req) {
  const date = "2022-08-22T21:09:50.862Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

