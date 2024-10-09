module.exports = async function (context, req) {
  const date = "2024-10-09T08:15:27.929Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

