module.exports = async function (context, req) {
  const date = "2023-11-16T18:11:49.609Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

