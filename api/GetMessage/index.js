module.exports = async function (context, req) {
  const date = "2023-08-09T01:57:22.932Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

