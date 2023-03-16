module.exports = async function (context, req) {
  const date = "2023-03-16T19:07:41.380Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

