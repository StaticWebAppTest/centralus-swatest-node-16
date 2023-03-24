module.exports = async function (context, req) {
  const date = "2023-03-24T15:09:57.007Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

