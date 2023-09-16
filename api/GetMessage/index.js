module.exports = async function (context, req) {
  const date = "2023-09-16T08:09:59.300Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

