module.exports = async function (context, req) {
  const date = "2024-11-13T16:14:41.712Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

