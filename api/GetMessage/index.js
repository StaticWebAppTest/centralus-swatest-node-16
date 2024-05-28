module.exports = async function (context, req) {
  const date = "2024-05-28T23:10:38.085Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

