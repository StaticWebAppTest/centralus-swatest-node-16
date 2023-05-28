module.exports = async function (context, req) {
  const date = "2023-05-28T12:15:02.394Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

