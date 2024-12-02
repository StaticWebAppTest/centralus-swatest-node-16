module.exports = async function (context, req) {
  const date = "2024-12-02T20:12:54.570Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

