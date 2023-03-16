module.exports = async function (context, req) {
  const date = "2023-03-16T18:12:37.915Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

