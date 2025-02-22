module.exports = async function (context, req) {
  const date = "2025-02-22T18:13:54.447Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

