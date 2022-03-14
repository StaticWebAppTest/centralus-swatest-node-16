module.exports = async function (context, req) {
  const date = "2022-03-14T17:10:52.753Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

