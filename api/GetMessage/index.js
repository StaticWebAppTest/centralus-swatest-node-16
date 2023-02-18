module.exports = async function (context, req) {
  const date = "2023-02-18T20:09:33.870Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

