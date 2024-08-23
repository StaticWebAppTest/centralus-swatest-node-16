module.exports = async function (context, req) {
  const date = "2024-08-23T18:13:54.452Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

