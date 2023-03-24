module.exports = async function (context, req) {
  const date = "2023-03-24T08:11:11.161Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

