module.exports = async function (context, req) {
  const date = "2023-01-28T17:08:03.708Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

