module.exports = async function (context, req) {
  const date = "2024-03-12T01:40:30.020Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

