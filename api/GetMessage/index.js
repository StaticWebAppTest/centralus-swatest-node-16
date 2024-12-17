module.exports = async function (context, req) {
  const date = "2024-12-17T14:12:09.390Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

