module.exports = async function (context, req) {
  const date = "2023-10-30T23:08:36.109Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

