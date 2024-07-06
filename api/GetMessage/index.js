module.exports = async function (context, req) {
  const date = "2024-07-06T21:10:27.698Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

