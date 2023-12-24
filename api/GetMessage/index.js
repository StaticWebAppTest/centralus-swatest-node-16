module.exports = async function (context, req) {
  const date = "2023-12-24T18:10:30.113Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

