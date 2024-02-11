module.exports = async function (context, req) {
  const date = "2024-02-11T01:46:22.230Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

