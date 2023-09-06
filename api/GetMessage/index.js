module.exports = async function (context, req) {
  const date = "2023-09-06T04:10:24.488Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

