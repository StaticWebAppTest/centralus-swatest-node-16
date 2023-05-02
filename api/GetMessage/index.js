module.exports = async function (context, req) {
  const date = "2023-05-02T04:10:33.926Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

