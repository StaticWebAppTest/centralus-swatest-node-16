module.exports = async function (context, req) {
  const date = "2023-12-09T05:08:45.418Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

