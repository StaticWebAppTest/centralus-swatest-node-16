module.exports = async function (context, req) {
  const date = "2025-03-04T09:13:10.171Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

