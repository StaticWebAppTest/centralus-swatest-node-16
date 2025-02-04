module.exports = async function (context, req) {
  const date = "2025-02-04T11:09:46.039Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

