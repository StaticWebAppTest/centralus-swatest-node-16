module.exports = async function (context, req) {
  const date = "2023-06-24T15:09:18.993Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

