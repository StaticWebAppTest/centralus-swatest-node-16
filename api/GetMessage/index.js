module.exports = async function (context, req) {
  const date = "2023-01-30T14:08:55.119Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

