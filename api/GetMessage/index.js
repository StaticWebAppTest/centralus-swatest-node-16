module.exports = async function (context, req) {
  const date = "2023-01-03T14:08:41.276Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

