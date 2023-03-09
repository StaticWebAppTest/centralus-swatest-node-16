module.exports = async function (context, req) {
  const date = "2023-03-09T18:13:03.288Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

