module.exports = async function (context, req) {
  const date = "2023-02-08T08:13:25.968Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

