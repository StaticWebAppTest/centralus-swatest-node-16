module.exports = async function (context, req) {
  const date = "2023-04-07T11:07:22.083Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

