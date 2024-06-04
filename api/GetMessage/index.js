module.exports = async function (context, req) {
  const date = "2024-06-04T04:12:05.670Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

