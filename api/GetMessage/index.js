module.exports = async function (context, req) {
  const date = "2023-08-12T09:07:22.621Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

