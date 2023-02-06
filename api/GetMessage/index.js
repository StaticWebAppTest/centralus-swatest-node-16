module.exports = async function (context, req) {
  const date = "2023-02-06T14:09:02.394Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

