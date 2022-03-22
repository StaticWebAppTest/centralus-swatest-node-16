module.exports = async function (context, req) {
  const date = "2022-03-22T00:44:26.411Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

