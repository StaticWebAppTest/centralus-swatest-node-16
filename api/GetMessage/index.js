module.exports = async function (context, req) {
  const date = "2023-08-16T08:11:14.933Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

