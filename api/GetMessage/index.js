module.exports = async function (context, req) {
  const date = "2023-06-04T07:07:54.115Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

