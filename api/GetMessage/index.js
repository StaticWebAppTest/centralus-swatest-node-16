module.exports = async function (context, req) {
  const date = "2024-12-21T18:14:13.750Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

