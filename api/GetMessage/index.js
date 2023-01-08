module.exports = async function (context, req) {
  const date = "2023-01-08T05:08:19.670Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

