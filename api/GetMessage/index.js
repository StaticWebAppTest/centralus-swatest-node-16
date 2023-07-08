module.exports = async function (context, req) {
  const date = "2023-07-08T05:08:58.036Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

