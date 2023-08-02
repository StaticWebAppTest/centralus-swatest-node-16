module.exports = async function (context, req) {
  const date = "2023-08-02T04:10:05.207Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

