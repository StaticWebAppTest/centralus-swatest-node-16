module.exports = async function (context, req) {
  const date = "2022-06-08T05:10:38.185Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

