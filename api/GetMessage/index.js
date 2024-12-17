module.exports = async function (context, req) {
  const date = "2024-12-17T15:13:02.545Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

