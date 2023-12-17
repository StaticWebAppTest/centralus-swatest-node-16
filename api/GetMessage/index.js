module.exports = async function (context, req) {
  const date = "2023-12-17T04:11:14.112Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

