module.exports = async function (context, req) {
  const date = "2023-11-09T18:11:26.607Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

