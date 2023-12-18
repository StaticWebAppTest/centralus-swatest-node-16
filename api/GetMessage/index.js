module.exports = async function (context, req) {
  const date = "2023-12-18T16:12:04.111Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

