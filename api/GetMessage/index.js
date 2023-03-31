module.exports = async function (context, req) {
  const date = "2023-03-31T17:08:12.174Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

