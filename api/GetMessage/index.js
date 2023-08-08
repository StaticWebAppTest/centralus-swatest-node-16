module.exports = async function (context, req) {
  const date = "2023-08-08T20:09:27.452Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

