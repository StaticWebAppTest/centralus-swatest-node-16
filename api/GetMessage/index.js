module.exports = async function (context, req) {
  const date = "2024-07-17T04:12:31.686Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

