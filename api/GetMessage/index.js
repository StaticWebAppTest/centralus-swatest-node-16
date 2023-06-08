module.exports = async function (context, req) {
  const date = "2023-06-08T13:12:14.239Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

