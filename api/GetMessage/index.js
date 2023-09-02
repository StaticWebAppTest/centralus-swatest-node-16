module.exports = async function (context, req) {
  const date = "2023-09-02T00:38:07.952Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

