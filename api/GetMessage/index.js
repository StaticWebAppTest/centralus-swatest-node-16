module.exports = async function (context, req) {
  const date = "2023-12-16T05:08:29.520Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

