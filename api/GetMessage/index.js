module.exports = async function (context, req) {
  const date = "2024-03-18T05:10:42.763Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

