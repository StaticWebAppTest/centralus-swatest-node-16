module.exports = async function (context, req) {
  const date = "2025-02-21T11:09:43.633Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

