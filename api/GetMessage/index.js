module.exports = async function (context, req) {
  const date = "2023-04-05T04:10:54.544Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

