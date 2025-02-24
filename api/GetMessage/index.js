module.exports = async function (context, req) {
  const date = "2025-02-24T23:11:30.757Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

