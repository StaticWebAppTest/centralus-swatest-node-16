module.exports = async function (context, req) {
  const date = "2023-05-04T01:58:21.003Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

