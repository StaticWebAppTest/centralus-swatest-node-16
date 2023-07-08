module.exports = async function (context, req) {
  const date = "2023-07-08T07:08:38.912Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

