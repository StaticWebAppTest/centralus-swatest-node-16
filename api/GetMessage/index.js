module.exports = async function (context, req) {
  const date = "2023-01-07T23:08:52.698Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

