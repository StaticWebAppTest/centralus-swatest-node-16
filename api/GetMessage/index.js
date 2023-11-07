module.exports = async function (context, req) {
  const date = "2023-11-07T11:07:29.147Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

