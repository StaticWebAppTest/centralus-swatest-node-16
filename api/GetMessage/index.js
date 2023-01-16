module.exports = async function (context, req) {
  const date = "2023-01-16T03:10:18.755Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

