module.exports = async function (context, req) {
  const date = "2023-01-02T06:12:27.708Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

