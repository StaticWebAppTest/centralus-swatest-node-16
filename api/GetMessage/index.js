module.exports = async function (context, req) {
  const date = "2022-09-12T09:16:51.018Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

