module.exports = async function (context, req) {
  const date = "2023-11-07T23:08:57.655Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

