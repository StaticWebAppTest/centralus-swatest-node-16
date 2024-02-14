module.exports = async function (context, req) {
  const date = "2024-02-14T06:12:37.171Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

