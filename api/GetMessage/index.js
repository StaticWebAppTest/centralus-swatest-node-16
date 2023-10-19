module.exports = async function (context, req) {
  const date = "2023-10-19T21:06:50.023Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

