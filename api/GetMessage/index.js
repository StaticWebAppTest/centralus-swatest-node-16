module.exports = async function (context, req) {
  const date = "2023-11-17T07:08:27.698Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

