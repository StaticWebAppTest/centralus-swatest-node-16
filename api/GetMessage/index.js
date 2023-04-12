module.exports = async function (context, req) {
  const date = "2023-04-12T07:08:21.028Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

