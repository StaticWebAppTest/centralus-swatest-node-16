module.exports = async function (context, req) {
  const date = "2023-05-23T03:09:14.965Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

