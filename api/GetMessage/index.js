module.exports = async function (context, req) {
  const date = "2022-05-15T13:27:26.636Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

