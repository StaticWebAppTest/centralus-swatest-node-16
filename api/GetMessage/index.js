module.exports = async function (context, req) {
  const date = "2022-12-08T13:18:19.259Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

