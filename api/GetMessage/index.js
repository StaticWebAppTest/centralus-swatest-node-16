module.exports = async function (context, req) {
  const date = "2024-09-03T11:09:40.926Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

