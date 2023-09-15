module.exports = async function (context, req) {
  const date = "2023-09-15T18:10:50.321Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

