module.exports = async function (context, req) {
  const date = "2023-05-30T09:08:53.028Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

