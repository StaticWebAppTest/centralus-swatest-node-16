module.exports = async function (context, req) {
  const date = "2023-01-07T18:10:45.922Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

