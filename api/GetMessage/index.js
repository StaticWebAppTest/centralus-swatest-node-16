module.exports = async function (context, req) {
  const date = "2026-02-04T11:27:45.767Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

