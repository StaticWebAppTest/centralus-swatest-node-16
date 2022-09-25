module.exports = async function (context, req) {
  const date = "2022-09-25T01:07:46.115Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

