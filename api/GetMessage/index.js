module.exports = async function (context, req) {
  const date = "2022-08-03T05:38:33.415Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

