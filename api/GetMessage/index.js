module.exports = async function (context, req) {
  const date = "2023-12-16T09:08:29.654Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

