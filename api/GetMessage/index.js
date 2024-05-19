module.exports = async function (context, req) {
  const date = "2024-05-19T18:12:04.039Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

