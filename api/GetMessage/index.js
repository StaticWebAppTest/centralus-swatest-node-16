module.exports = async function (context, req) {
  const date = "2024-01-13T23:09:15.094Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

