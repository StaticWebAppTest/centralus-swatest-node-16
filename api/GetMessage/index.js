module.exports = async function (context, req) {
  const date = "2023-08-17T16:10:33.079Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

