module.exports = async function (context, req) {
  const date = "2023-11-06T15:09:53.546Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

