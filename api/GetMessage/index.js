module.exports = async function (context, req) {
  const date = "2023-06-09T05:08:39.950Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

