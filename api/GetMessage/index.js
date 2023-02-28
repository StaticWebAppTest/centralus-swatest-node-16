module.exports = async function (context, req) {
  const date = "2023-02-28T18:12:47.482Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

