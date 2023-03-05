module.exports = async function (context, req) {
  const date = "2023-03-05T01:00:10.104Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

