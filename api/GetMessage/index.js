module.exports = async function (context, req) {
  const date = "2024-06-27T18:12:03.799Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

