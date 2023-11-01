module.exports = async function (context, req) {
  const date = "2023-11-01T09:09:05.476Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

