module.exports = async function (context, req) {
  const date = "2023-12-08T13:11:18.407Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

