module.exports = async function (context, req) {
  const date = "2023-06-14T23:09:32.407Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

