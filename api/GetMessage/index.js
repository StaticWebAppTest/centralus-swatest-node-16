module.exports = async function (context, req) {
  const date = "2023-05-03T20:09:18.529Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

