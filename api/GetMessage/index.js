module.exports = async function (context, req) {
  const date = "2023-01-11T15:20:17.713Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

