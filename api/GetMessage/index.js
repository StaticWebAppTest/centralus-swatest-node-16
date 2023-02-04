module.exports = async function (context, req) {
  const date = "2023-02-04T02:08:53.288Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

