module.exports = async function (context, req) {
  const date = "2023-02-16T05:09:45.858Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

