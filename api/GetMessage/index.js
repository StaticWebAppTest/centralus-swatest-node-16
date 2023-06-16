module.exports = async function (context, req) {
  const date = "2023-06-16T05:08:31.106Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

