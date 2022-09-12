module.exports = async function (context, req) {
  const date = "2022-09-12T12:26:59.002Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

