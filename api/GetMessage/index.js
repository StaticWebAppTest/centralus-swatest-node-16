module.exports = async function (context, req) {
  const date = "2023-04-03T17:08:06.698Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

