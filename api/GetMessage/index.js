module.exports = async function (context, req) {
  const date = "2023-02-22T09:10:20.727Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

