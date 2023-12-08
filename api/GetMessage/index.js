module.exports = async function (context, req) {
  const date = "2023-12-08T15:09:27.603Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

