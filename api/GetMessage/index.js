module.exports = async function (context, req) {
  const date = "2024-03-24T23:10:26.466Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

