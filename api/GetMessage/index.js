module.exports = async function (context, req) {
  const date = "2023-06-24T13:15:49.867Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

