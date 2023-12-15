module.exports = async function (context, req) {
  const date = "2023-12-15T20:09:54.975Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

