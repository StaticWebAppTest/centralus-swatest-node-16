module.exports = async function (context, req) {
  const date = "2023-04-07T22:07:45.171Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

