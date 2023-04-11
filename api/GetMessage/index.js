module.exports = async function (context, req) {
  const date = "2023-04-11T21:07:55.020Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

