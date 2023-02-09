module.exports = async function (context, req) {
  const date = "2023-02-09T18:12:30.648Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

