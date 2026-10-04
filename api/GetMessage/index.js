module.exports = async function (context, req) {
  const date = "2026-10-04T09:12:27.540Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

