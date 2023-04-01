module.exports = async function (context, req) {
  const date = "2023-04-01T15:08:03.079Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

