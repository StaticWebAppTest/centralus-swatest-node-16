module.exports = async function (context, req) {
  const date = "2023-03-03T02:44:03.865Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

