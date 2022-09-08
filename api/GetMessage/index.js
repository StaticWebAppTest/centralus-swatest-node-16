module.exports = async function (context, req) {
  const date = "2022-09-08T17:24:54.753Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

