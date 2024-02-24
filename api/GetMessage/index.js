module.exports = async function (context, req) {
  const date = "2024-02-24T17:09:26.870Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

