module.exports = async function (context, req) {
  const date = "2023-06-07T11:07:00.507Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

