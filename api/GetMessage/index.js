module.exports = async function (context, req) {
  const date = "2023-07-10T04:12:10.393Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

