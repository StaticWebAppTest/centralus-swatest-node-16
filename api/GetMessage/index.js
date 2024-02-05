module.exports = async function (context, req) {
  const date = "2024-02-05T08:11:57.067Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

