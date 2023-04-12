module.exports = async function (context, req) {
  const date = "2023-04-12T16:11:49.870Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

