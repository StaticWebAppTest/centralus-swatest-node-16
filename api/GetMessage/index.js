module.exports = async function (context, req) {
  const date = "2023-02-27T06:13:41.435Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

