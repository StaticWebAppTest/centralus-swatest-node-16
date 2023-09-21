module.exports = async function (context, req) {
  const date = "2023-09-21T18:11:36.823Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

