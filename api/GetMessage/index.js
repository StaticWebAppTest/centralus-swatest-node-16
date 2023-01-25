module.exports = async function (context, req) {
  const date = "2023-01-25T04:11:31.386Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

