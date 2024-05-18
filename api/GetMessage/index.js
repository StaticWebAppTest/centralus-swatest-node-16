module.exports = async function (context, req) {
  const date = "2024-05-18T18:12:23.320Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

