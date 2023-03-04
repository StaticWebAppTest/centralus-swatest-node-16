module.exports = async function (context, req) {
  const date = "2023-03-04T05:09:00.289Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

