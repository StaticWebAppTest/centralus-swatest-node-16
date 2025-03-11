module.exports = async function (context, req) {
  const date = "2025-03-11T09:13:27.476Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

