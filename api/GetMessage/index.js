module.exports = async function (context, req) {
  const date = "2023-02-13T23:10:14.488Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

