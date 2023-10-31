module.exports = async function (context, req) {
  const date = "2023-10-31T18:11:23.044Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

