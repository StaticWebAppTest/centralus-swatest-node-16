module.exports = async function (context, req) {
  const date = "2024-02-21T05:08:40.141Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

