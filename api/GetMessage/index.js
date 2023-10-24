module.exports = async function (context, req) {
  const date = "2023-10-24T12:16:35.354Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

