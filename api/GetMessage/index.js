module.exports = async function (context, req) {
  const date = "2022-08-08T04:28:51.790Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

