module.exports = async function (context, req) {
  const date = "2024-05-29T15:11:23.799Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

