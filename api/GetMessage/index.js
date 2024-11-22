module.exports = async function (context, req) {
  const date = "2024-11-22T17:11:40.093Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

