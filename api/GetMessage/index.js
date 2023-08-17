module.exports = async function (context, req) {
  const date = "2023-08-17T17:07:33.240Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

