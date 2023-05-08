module.exports = async function (context, req) {
  const date = "2023-05-08T11:07:41.785Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

