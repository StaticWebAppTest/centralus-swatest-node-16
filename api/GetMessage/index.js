module.exports = async function (context, req) {
  const date = "2024-11-24T07:10:41.779Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

