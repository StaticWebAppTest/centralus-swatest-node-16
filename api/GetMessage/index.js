module.exports = async function (context, req) {
  const date = "2024-03-09T04:10:12.713Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

