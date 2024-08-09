module.exports = async function (context, req) {
  const date = "2024-08-09T09:12:11.473Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

