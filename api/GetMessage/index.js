module.exports = async function (context, req) {
  const date = "2024-12-01T18:15:20.533Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

