module.exports = async function (context, req) {
  const date = "2023-09-06T02:14:39.763Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

