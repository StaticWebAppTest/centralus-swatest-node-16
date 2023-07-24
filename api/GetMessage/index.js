module.exports = async function (context, req) {
  const date = "2023-07-24T20:08:45.473Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

