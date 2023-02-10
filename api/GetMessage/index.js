module.exports = async function (context, req) {
  const date = "2023-02-10T04:12:20.262Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

