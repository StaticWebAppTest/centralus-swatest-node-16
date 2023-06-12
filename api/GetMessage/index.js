module.exports = async function (context, req) {
  const date = "2023-06-12T09:09:27.689Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

