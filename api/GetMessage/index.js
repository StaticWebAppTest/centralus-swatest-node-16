module.exports = async function (context, req) {
  const date = "2022-07-29T03:46:27.368Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

