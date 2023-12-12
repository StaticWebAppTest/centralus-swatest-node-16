module.exports = async function (context, req) {
  const date = "2023-12-12T14:08:45.245Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

