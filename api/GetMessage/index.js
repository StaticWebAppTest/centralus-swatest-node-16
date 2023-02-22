module.exports = async function (context, req) {
  const date = "2023-02-22T18:12:27.281Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

