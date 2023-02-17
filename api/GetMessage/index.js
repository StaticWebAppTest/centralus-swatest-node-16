module.exports = async function (context, req) {
  const date = "2023-02-17T05:09:24.488Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

