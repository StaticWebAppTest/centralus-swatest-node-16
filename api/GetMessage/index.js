module.exports = async function (context, req) {
  const date = "2023-10-21T00:39:33.448Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

