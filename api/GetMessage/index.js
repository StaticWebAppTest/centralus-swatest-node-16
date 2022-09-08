module.exports = async function (context, req) {
  const date = "2022-09-08T16:16:05.205Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

