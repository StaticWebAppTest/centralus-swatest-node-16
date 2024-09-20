module.exports = async function (context, req) {
  const date = "2024-09-20T08:15:19.119Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

