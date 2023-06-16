module.exports = async function (context, req) {
  const date = "2023-06-16T06:11:49.301Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

