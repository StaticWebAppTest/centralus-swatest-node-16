module.exports = async function (context, req) {
  const date = "2023-04-06T09:08:53.504Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

