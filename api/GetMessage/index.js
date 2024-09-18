module.exports = async function (context, req) {
  const date = "2024-09-18T23:11:01.104Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

