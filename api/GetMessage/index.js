module.exports = async function (context, req) {
  const date = "2023-09-19T08:12:15.288Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

