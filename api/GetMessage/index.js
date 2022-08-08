module.exports = async function (context, req) {
  const date = "2022-08-08T16:16:10.470Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

