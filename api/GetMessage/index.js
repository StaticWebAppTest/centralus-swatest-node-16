module.exports = async function (context, req) {
  const date = "2023-05-21T18:10:28.993Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

