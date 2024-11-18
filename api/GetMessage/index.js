module.exports = async function (context, req) {
  const date = "2024-11-18T17:11:02.747Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

