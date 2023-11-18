module.exports = async function (context, req) {
  const date = "2023-11-18T16:10:36.657Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

