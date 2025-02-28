module.exports = async function (context, req) {
  const date = "2025-02-28T13:19:47.293Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

