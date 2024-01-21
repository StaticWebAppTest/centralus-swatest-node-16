module.exports = async function (context, req) {
  const date = "2024-01-21T08:11:02.533Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

