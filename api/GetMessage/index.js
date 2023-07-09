module.exports = async function (context, req) {
  const date = "2023-07-09T14:08:20.028Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

