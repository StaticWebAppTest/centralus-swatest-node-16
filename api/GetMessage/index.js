module.exports = async function (context, req) {
  const date = "2023-05-11T00:47:19.534Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

