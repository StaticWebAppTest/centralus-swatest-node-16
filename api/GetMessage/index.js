module.exports = async function (context, req) {
  const date = "2024-11-09T23:10:56.094Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

