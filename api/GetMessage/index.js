module.exports = async function (context, req) {
  const date = "2025-09-02T12:27:21.874Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

