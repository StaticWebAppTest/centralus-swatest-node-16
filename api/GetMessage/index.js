module.exports = async function (context, req) {
  const date = "2023-04-01T09:07:55.838Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

