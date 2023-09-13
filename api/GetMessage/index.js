module.exports = async function (context, req) {
  const date = "2023-09-13T04:10:41.448Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

