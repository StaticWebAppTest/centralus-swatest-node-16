module.exports = async function (context, req) {
  const date = "2023-01-28T05:08:25.227Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

