module.exports = async function (context, req) {
  const date = "2023-06-08T08:11:16.117Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

