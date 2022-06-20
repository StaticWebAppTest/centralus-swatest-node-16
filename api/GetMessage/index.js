module.exports = async function (context, req) {
  const date = "2022-06-20T05:10:19.621Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

