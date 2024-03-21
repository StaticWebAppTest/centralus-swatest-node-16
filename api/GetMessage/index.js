module.exports = async function (context, req) {
  const date = "2024-03-21T18:11:37.245Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

