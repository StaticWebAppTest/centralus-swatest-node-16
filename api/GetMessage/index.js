module.exports = async function (context, req) {
  const date = "2024-03-14T23:08:45.860Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

