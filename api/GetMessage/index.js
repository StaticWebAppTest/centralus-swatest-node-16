module.exports = async function (context, req) {
  const date = "2023-08-12T02:11:07.319Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

