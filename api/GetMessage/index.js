module.exports = async function (context, req) {
  const date = "2024-08-30T07:10:40.509Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

