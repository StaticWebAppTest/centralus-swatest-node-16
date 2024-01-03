module.exports = async function (context, req) {
  const date = "2024-01-03T16:11:45.929Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

