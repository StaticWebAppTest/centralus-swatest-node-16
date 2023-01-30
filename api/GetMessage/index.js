module.exports = async function (context, req) {
  const date = "2023-01-30T05:09:33.441Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

