module.exports = async function (context, req) {
  const date = "2023-03-07T18:12:35.850Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

