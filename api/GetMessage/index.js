module.exports = async function (context, req) {
  const date = "2023-03-17T00:52:36.975Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

