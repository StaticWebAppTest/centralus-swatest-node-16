module.exports = async function (context, req) {
  const date = "2023-11-24T18:11:15.912Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

