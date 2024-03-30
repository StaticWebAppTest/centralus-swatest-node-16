module.exports = async function (context, req) {
  const date = "2024-03-30T23:08:14.396Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

