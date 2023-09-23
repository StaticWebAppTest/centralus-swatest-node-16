module.exports = async function (context, req) {
  const date = "2023-09-23T12:14:27.245Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

