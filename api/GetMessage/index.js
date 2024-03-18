module.exports = async function (context, req) {
  const date = "2024-03-18T16:12:07.101Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

