module.exports = async function (context, req) {
  const date = "2022-05-24T19:08:58.368Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

