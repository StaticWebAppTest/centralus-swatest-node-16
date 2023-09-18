module.exports = async function (context, req) {
  const date = "2023-09-18T09:09:33.589Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

