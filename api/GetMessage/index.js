module.exports = async function (context, req) {
  const date = "2023-02-22T04:12:19.380Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

