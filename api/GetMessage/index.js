module.exports = async function (context, req) {
  const date = "2023-08-14T08:11:18.890Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

