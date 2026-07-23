module.exports = async function (context, req) {
  const date = "2026-07-23T08:17:30.975Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

