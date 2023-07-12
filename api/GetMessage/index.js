module.exports = async function (context, req) {
  const date = "2023-07-12T16:12:41.036Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

