module.exports = async function (context, req) {
  const date = "2022-09-26T18:15:43.809Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

