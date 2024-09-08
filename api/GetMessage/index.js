module.exports = async function (context, req) {
  const date = "2024-09-08T04:13:10.016Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

