module.exports = async function (context, req) {
  const date = "2023-12-17T18:10:49.209Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

