module.exports = async function (context, req) {
  const date = "2023-04-26T04:10:45.141Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

