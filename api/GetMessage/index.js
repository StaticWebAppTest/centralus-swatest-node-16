module.exports = async function (context, req) {
  const date = "2024-01-09T18:09:50.929Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

