module.exports = async function (context, req) {
  const date = "2023-10-17T18:11:55.946Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

