module.exports = async function (context, req) {
  const date = "2024-09-28T23:10:17.473Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

