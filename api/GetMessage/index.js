module.exports = async function (context, req) {
  const date = "2023-07-21T18:11:46.367Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

