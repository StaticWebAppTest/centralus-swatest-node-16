module.exports = async function (context, req) {
  const date = "2023-01-17T03:10:10.715Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

