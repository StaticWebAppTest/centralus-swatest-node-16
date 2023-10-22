module.exports = async function (context, req) {
  const date = "2023-10-22T14:07:19.326Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

