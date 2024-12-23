module.exports = async function (context, req) {
  const date = "2024-12-23T14:10:57.763Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

