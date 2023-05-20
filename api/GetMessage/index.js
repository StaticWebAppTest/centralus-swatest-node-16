module.exports = async function (context, req) {
  const date = "2023-05-20T12:15:03.245Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

