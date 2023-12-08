module.exports = async function (context, req) {
  const date = "2023-12-08T12:17:11.570Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

