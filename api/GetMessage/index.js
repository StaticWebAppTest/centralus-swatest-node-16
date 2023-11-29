module.exports = async function (context, req) {
  const date = "2023-11-29T09:09:28.799Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

