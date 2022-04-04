module.exports = async function (context, req) {
  const date = "2022-04-04T00:48:13.079Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

