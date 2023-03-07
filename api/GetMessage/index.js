module.exports = async function (context, req) {
  const date = "2023-03-07T03:24:27.002Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

