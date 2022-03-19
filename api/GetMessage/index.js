module.exports = async function (context, req) {
  const date = "2022-03-19T12:16:26.519Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

