module.exports = async function (context, req) {
  const date = "2023-09-30T12:14:40.109Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

