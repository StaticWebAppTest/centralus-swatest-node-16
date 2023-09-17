module.exports = async function (context, req) {
  const date = "2023-09-17T04:09:45.226Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

