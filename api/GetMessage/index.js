module.exports = async function (context, req) {
  const date = "2026-09-11T05:30:03.659Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

