module.exports = async function (context, req) {
  const date = "2023-10-09T11:07:47.311Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

