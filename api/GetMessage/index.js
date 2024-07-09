module.exports = async function (context, req) {
  const date = "2024-07-09T17:10:38.870Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

