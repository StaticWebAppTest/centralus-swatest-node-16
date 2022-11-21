module.exports = async function (context, req) {
  const date = "2022-11-21T09:11:49.227Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

