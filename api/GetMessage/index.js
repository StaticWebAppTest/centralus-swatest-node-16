module.exports = async function (context, req) {
  const date = "2022-05-24T03:18:48.501Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

