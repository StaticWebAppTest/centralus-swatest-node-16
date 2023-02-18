module.exports = async function (context, req) {
  const date = "2023-02-18T21:08:12.570Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

