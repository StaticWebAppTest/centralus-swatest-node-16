module.exports = async function (context, req) {
  const date = "2024-05-14T23:09:15.747Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

