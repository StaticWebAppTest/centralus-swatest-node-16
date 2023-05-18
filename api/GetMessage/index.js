module.exports = async function (context, req) {
  const date = "2023-05-18T00:47:28.665Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

