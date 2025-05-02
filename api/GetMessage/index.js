module.exports = async function (context, req) {
  const date = "2025-05-02T07:13:03.650Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

