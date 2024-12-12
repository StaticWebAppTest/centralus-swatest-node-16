module.exports = async function (context, req) {
  const date = "2024-12-12T15:13:10.101Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

