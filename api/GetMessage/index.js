module.exports = async function (context, req) {
  const date = "2023-10-16T01:46:43.860Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

