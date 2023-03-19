module.exports = async function (context, req) {
  const date = "2023-03-19T17:08:03.436Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

