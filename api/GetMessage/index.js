module.exports = async function (context, req) {
  const date = "2022-04-08T00:49:46.790Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

