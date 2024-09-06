module.exports = async function (context, req) {
  const date = "2024-09-06T18:14:13.354Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

