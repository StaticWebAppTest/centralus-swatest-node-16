module.exports = async function (context, req) {
  const date = "2023-12-02T17:07:20.952Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

