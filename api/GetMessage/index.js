module.exports = async function (context, req) {
  const date = "2023-10-12T10:09:31.326Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

