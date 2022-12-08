module.exports = async function (context, req) {
  const date = "2022-12-08T09:09:45.717Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

