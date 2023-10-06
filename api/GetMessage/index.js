module.exports = async function (context, req) {
  const date = "2023-10-06T15:09:36.645Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

