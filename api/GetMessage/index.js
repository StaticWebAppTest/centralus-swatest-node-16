module.exports = async function (context, req) {
  const date = "2024-08-21T15:10:45.549Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

