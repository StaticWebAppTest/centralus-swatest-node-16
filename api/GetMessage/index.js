module.exports = async function (context, req) {
  const date = "2023-03-27T00:47:40.542Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

