module.exports = async function (context, req) {
  const date = "2024-06-30T18:13:23.120Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

