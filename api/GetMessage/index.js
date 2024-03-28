module.exports = async function (context, req) {
  const date = "2024-03-28T20:10:40.120Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

