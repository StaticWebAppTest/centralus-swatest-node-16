module.exports = async function (context, req) {
  const date = "2023-11-06T16:12:22.354Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

