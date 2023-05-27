module.exports = async function (context, req) {
  const date = "2023-05-27T00:50:47.131Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

