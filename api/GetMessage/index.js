module.exports = async function (context, req) {
  const date = "2023-05-27T09:07:55.794Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

