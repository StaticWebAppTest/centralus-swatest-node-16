module.exports = async function (context, req) {
  const date = "2024-03-28T01:41:59.533Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

