module.exports = async function (context, req) {
  const date = "2023-12-30T23:08:23.808Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

