module.exports = async function (context, req) {
  const date = "2023-02-19T00:54:23.689Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

