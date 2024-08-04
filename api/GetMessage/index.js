module.exports = async function (context, req) {
  const date = "2024-08-04T14:09:43.301Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

