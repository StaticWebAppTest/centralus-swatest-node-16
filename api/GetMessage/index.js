module.exports = async function (context, req) {
  const date = "2024-03-03T04:12:07.698Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

