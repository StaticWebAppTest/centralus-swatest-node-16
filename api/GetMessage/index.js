module.exports = async function (context, req) {
  const date = "2023-01-17T18:11:50.285Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

