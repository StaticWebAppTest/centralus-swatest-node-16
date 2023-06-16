module.exports = async function (context, req) {
  const date = "2023-06-16T18:10:46.321Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

