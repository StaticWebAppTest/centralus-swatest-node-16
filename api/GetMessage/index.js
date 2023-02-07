module.exports = async function (context, req) {
  const date = "2023-02-07T05:09:12.555Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

