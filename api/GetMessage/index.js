module.exports = async function (context, req) {
  const date = "2023-01-12T06:12:36.713Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

