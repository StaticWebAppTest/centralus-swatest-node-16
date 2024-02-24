module.exports = async function (context, req) {
  const date = "2024-02-24T18:10:45.508Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

