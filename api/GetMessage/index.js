module.exports = async function (context, req) {
  const date = "2022-06-09T05:10:35.923Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

