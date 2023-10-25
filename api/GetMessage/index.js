module.exports = async function (context, req) {
  const date = "2023-10-25T23:08:57.345Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

