module.exports = async function (context, req) {
  const date = "2024-02-10T15:07:41.698Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

