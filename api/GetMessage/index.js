module.exports = async function (context, req) {
  const date = "2023-12-05T05:09:02.870Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

