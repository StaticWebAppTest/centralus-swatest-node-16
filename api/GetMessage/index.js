module.exports = async function (context, req) {
  const date = "2024-01-11T07:08:52.648Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

