module.exports = async function (context, req) {
  const date = "2023-10-24T21:07:45.596Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

