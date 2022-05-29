module.exports = async function (context, req) {
  const date = "2022-05-29T21:10:05.368Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

