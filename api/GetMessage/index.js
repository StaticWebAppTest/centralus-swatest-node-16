module.exports = async function (context, req) {
  const date = "2023-05-01T18:10:54.125Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

