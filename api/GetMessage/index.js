module.exports = async function (context, req) {
  const date = "2023-05-07T15:08:24.002Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

