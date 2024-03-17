module.exports = async function (context, req) {
  const date = "2024-03-17T23:10:15.285Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

