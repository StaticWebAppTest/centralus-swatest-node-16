module.exports = async function (context, req) {
  const date = "2023-03-25T07:07:52.115Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

