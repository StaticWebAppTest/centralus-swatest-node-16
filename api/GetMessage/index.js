module.exports = async function (context, req) {
  const date = "2022-03-03T21:09:22.529Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

