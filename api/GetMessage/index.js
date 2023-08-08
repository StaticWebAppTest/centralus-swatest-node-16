module.exports = async function (context, req) {
  const date = "2023-08-08T02:26:09.671Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

