module.exports = async function (context, req) {
  const date = "2024-03-11T07:09:41.926Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

