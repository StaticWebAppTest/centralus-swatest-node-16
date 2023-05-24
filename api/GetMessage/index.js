module.exports = async function (context, req) {
  const date = "2023-05-24T11:07:25.537Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

