module.exports = async function (context, req) {
  const date = "2024-03-11T14:08:37.763Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

