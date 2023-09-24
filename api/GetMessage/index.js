module.exports = async function (context, req) {
  const date = "2023-09-24T15:07:30.913Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

