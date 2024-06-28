module.exports = async function (context, req) {
  const date = "2024-06-28T18:13:07.113Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

