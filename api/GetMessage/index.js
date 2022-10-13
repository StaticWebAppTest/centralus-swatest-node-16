module.exports = async function (context, req) {
  const date = "2022-10-13T14:21:41.496Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

