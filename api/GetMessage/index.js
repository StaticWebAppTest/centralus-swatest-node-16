module.exports = async function (context, req) {
  const date = "2023-12-10T15:08:12.747Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

