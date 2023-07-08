module.exports = async function (context, req) {
  const date = "2023-07-08T18:11:17.444Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

