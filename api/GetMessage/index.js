module.exports = async function (context, req) {
  const date = "2024-02-09T00:40:23.533Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

